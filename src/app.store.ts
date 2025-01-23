import { browser } from "$app/environment";
import { DeviceType } from "$lib/enum/device_type";
import { derived, writable } from "svelte/store";

export const deviceWidth = writable(0);

export const whichDevice = derived([deviceWidth], ([width]): DeviceType => {
    if (width > 1024 || !browser) {
        return DeviceType.DESKTOP;
    } else if (width > 640) {
        return DeviceType.TABLET;
    } else {
        return DeviceType.MOBILE;
    }
});