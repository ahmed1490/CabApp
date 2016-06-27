package com.cabapp;

import com.facebook.react.ReactActivity;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "CabApp";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FIRMessagingPackage(),
            new MapsPackage(),
            new RNGeocoderPackage(),
            new VectorIconsPackage(),
            new ReactNativePushNotificationPackage(this),
            new ReactNativeI18n(),
            new RNDeviceInfo()
        );
    }
}
