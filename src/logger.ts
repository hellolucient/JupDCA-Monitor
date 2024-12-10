export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

export class Logger {
    private static level: LogLevel = LogLevel.INFO;

    static setLevel(level: LogLevel) {
        this.level = level;
    }

    static debug(message: string, ...args: any[]) {
        if (this.level <= LogLevel.DEBUG) {
            console.log(`[DEBUG] ${message}`, ...args);
        }
    }

    static info(message: string, ...args: any[]) {
        if (this.level <= LogLevel.INFO) {
            console.log(`[INFO] ${message}`, ...args);
        }
    }

    static warn(message: string, ...args: any[]) {
        if (this.level <= LogLevel.WARN) {
            console.warn(`[WARN] ${message}`, ...args);
        }
    }

    static error(message: string, error?: any) {
        if (this.level <= LogLevel.ERROR) {
            console.error(`[ERROR] ${message}`, error || '');
        }
    }
} 