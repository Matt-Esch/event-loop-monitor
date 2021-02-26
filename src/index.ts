import { foo } from "./test";

if (foo) {
    console.log(foo);
} else {
    console.log('bar');
}

const DEFAULT_PROFILER_OPTS = {
    lagThreshold: 500,
};

type ProfilerOptions = {
    lagThreshold: number;
};

export class EventLoopProfiler {
    private lagThreshold: number;

    constructor(opts?: ProfilerOptions) {
        opts = opts || DEFAULT_PROFILER_OPTS;
        this.lagThreshold = opts.lagThreshold;
        console.log(opts);
        console.log(this.lagThreshold)
    }
}

export function monitor(lagThreshold: number): EventLoopProfiler {
    return new EventLoopProfiler({
        lagThreshold: lagThreshold,
    });
}
