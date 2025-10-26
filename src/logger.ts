export type LogLevel = "silent" | "error" | "warn" | "info" | "debug";

export interface ShipstackLogger {
  debug?: (...args: any[]) => void;
  info?: (...args: any[]) => void;
  warn?: (...args: any[]) => void;
  error?: (...args: any[]) => void;
}

let currentLogger: ShipstackLogger = {};
let currentLevel: LogLevel = "silent";

const levelOrder: LogLevel[] = ["silent", "error", "warn", "info", "debug"];

function shouldLog(level: LogLevel): boolean {
  return levelOrder.indexOf(level) <= levelOrder.indexOf(currentLevel);
}

export function setLogger(logger: ShipstackLogger) {
  currentLogger = logger;
}

export function setLogLevel(level: LogLevel) {
  currentLevel = level;
}

export function getLogger(): Required<ShipstackLogger> {
  return {
    debug: (...args) => {
      if (shouldLog("debug")) currentLogger.debug?.(...args);
    },
    info: (...args) => {
      if (shouldLog("info")) currentLogger.info?.(...args);
    },
    warn: (...args) => {
      if (shouldLog("warn")) currentLogger.warn?.(...args);
    },
    error: (...args) => {
      if (shouldLog("error")) currentLogger.error?.(...args);
    }
  };
}