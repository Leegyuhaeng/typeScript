class Singleton {
    private static _instance: Singleton;
    private constructor() {
        console.log("싱글톤 생성");
    }
    public static getInstance() {
        if(this._instance) {
            return this._instance
        }
        this._instance = new Singleton();
        return this._instance;
    }
}
const single: Singleton = Singleton.getInstance();

class Singleton2 {
    private static _instance = new Singleton2();
    private constructor() {
        console.log("싱글톤 생성");
    }
    public static getInstance() {
        return this._instance;
    }
}
const single2: Singleton2 = Singleton2.getInstance();
const single4: Singleton2 = Singleton2.getInstance();
const single5: Singleton2 = Singleton2.getInstance();
const single6: Singleton2 = Singleton2.getInstance();
const single7: Singleton2 = Singleton2.getInstance();
const single8: Singleton2 = Singleton2.getInstance();