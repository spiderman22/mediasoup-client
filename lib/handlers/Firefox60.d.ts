import { IceParameters, IceCandidate, DtlsParameters } from './../Transport';
import { RtpCapabilities } from '../RtpParameters';
import { SctpCapabilities, SctpParameters } from '../SctpParameters';
export default class Firefox60 {
    static get label(): string;
    static getNativeRtpCapabilities(): Promise<RtpCapabilities>;
    static getNativeSctpCapabilities(): Promise<SctpCapabilities>;
    constructor({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }: {
        direction: 'send' | 'recv';
        iceParameters: IceParameters;
        iceCandidates: IceCandidate[];
        dtlsParameters: DtlsParameters;
        sctpParameters?: SctpParameters;
        iceServers?: RTCIceServer[];
        iceTransportPolicy?: RTCIceTransportPolicy;
        additionalSettings?: any;
        proprietaryConstraints?: any;
        extendedRtpCapabilities: any;
    });
}
//# sourceMappingURL=Firefox60.d.ts.map