declare type _time = {
    setInterval: (callback: Function, delay: number) => void;
    setTimeout: (callback: Function, delay: number) => void;
    Timer: new (callback: Function, delay: number, repeat: boolean) => Timer
}