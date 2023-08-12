import ToolInterface from "./ToolInterface";
import { Dispatch, SetStateAction } from "react";
import { location } from "./Location";
import { GeolocationNotAvaible } from "./Exceptions/GeolocationNotAvaible";
import { GeoLocationPermissionDenied } from "./Exceptions/GeoLocationPermissionDenied";
import { GeoLocationTimeOut } from "./Exceptions/GeoLocationTimeOut";
import { GeoLocationUnknowError } from "./Exceptions/GeoLocationUnknowError";
import { Card } from "react-bootstrap";
export class GpsTracker implements ToolInterface<Dispatch<SetStateAction<location | undefined>>>{
    parameter?: Dispatch<SetStateAction<location | undefined>>;
    role: string = 'tracker'
    error?: GeolocationPositionError | undefined;

    constructor(param: Dispatch<SetStateAction<location | undefined>>) {
        this.setParameters(param)
    }

    async execute() {
        this.veriryTracker();
        try {
            if (this.parameter !== undefined) {
                let coords = await this.trakingLocation();
                let cordenadas: location = {
                    lat: coords?.coords.latitude,
                    lon: coords?.coords.longitude,
                    alt: coords?.coords.altitude,
                }
                this.parameter(cordenadas)
            }
        } catch (e) {
            this.errorResponse((e as GeolocationPositionError));
        }

    };

    async watching(){

        this.veriryTracker();
        
        try{
            if (this.parameter !== undefined) {
                navigator.geolocation.watchPosition((e) => this.success(e,this),(e) => this.errorResponse(e,this), {
                    timeout: Infinity,
                    maximumAge: 0,
                    enableHighAccuracy: true
                });   
            }
        } catch (e) {
            this.errorResponse((e as GeolocationPositionError));
        }
    };

    async watching2(){
        this.veriryTracker();
        try {
            if (this.parameter !== undefined) {
                let coords = await this.whatchingLocation();
                let cordenadas: location = {
                    lat: coords?.coords.latitude,
                    lon: coords?.coords.longitude,
                    alt: coords?.coords.altitude,
                }
                this.parameter(cordenadas)
            }
        } catch (e) {
            this.errorResponse((e as GeolocationPositionError));
            this.watching2()
        }
    }

    success(val: GeolocationPosition, cl: GpsTracker) {
        
        if (cl.parameter !== undefined) {
            let newPosition: location = {
                lat: val.coords.latitude,
                lon: val.coords.longitude,
                alt: val.coords.altitude,
            }

            cl.parameter(newPosition)
        }
    }

    setParameters(param: Dispatch<SetStateAction<location | undefined>>) {
        this.parameter = param;
    };

    setError(err: GeolocationPositionError | undefined,th:  GpsTracker) {
        th.error = err
    }

    private errorResponse(error: GeolocationPositionError, th?: GpsTracker)
    {
        if(th !== undefined){
            th.setError(error,th)
        }
        if (error !== undefined) {
            switch (error?.code) {
                case error?.PERMISSION_DENIED:
                    throw new GeoLocationPermissionDenied;
                case error?.POSITION_UNAVAILABLE:
                    throw new GeolocationNotAvaible;
                case error?.TIMEOUT:
                    throw new GeoLocationTimeOut
                default:
                    throw new GeoLocationUnknowError;
            }
        }

    }
    private veriryTracker() {
        if ((navigator === undefined) && !("geolocation" in navigator)) {
            throw new GeolocationNotAvaible();
        }
    }

    private trakingLocation(): Promise<GeolocationPosition | undefined> {
        return new Promise<GeolocationPosition | undefined>(
            (resol, reject) => navigator.geolocation.getCurrentPosition(resol, reject)
        );
    }

    private whatchingLocation() {
        return new Promise<GeolocationPosition | undefined>(
            (resol, reject) => navigator.geolocation.watchPosition(resol, reject, {
                timeout: Infinity,
                maximumAge: 0,
                enableHighAccuracy: true
            })
        );
    }


}