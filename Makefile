# simulator name for iOs
SIMULATOR := iPhone 11 Pro

setup-initial:

setup:
	watchman watch-del-all
	rm -rf ./node_modules
	yarn
	# node simulator_edit_config.js
	rm -rf ./ios/Pods
	rm -f ./ios/Podfile.lock
	# arch -x86_64 npx react-native link
	arch -x86_64 pod install --project-directory='./ios/'
	arch -x86_64 npx react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'
	# yarn jetify

start-ios:
	arch -x86_64 npx react-native run-ios --scheme  MyApp.development --simulator="$(SIMULATOR)"

start-ios-staging:
	arch -x86_64 npx react-native run-ios --scheme  MyApp.staging

start-ios-production:
	arch -x86_64 npx react-native run-ios --scheme  MyApp.production

# start-ios-integration:
# 	arch -x86_64 npx react-native run-ios --scheme  MyApp.integration

# android run application
start-android:
	ENVFILE=.env arch -x86_64 npx react-native run-android
	adb reverse tcp:3000 tcp:3000

# cd $$HOME/Library/Android/sdk/emulator/ && ./emulator -avd $$(./emulator -list-avds | tail -n 1)

start-android-staging:
	ENVFILE=.env.staging arch -x86_64 npx react-native run-android

start-android-production:
	ENVFILE=.env.production arch -x86_64 npx react-native run-android

start-android-integration:
	ENVFILE=.env.integration arch -x86_64 npx react-native run-android


build-js:
	arch -x86_64 npx react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'

build-android-staging:
	node ./support/change_android_app_version.js
	cd ./android && ENVFILE=.env.staging ./gradlew assembleRelease
	node ./support/send_apk_to_server.js Staging

build-android-integration:
	node ./support/change_android_app_version.js
	cd ./android && ENVFILE=.env.integration ./gradlew assembleRelease
	node ./support/send_apk_to_server.js Integration

build-android-production:
	node ./support/change_android_app_version.js
	cd ./android && ENVFILE=.env.production ./gradlew assembleRelease
	cd ./android && ENVFILE=.env.production ./gradlew bundleRelease
	node ./support/send_apk_to_server.js Production
