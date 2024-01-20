// 데코레이터를 사용하게되면 type 에 any 를 많이 넣어야 할 수도 있다 (type 적인 구조 포기 => 편리함)

export function newBuilder<T extends { new(...args: any[]): {} }>(Constructor: T) {
    const keys = Object.keys(new Constructor());

    return class extends Constructor {
        static NewBuilder = class {
            constructor() {
                for (let key of keys) {
                    Object.defineProperties(this, {
                        ["_" + key]: {
                            value: this[key],
                            enumerable: true,
                            writable: true
                        },
                        [key]: {
                            value: (newValue: any) => {
                                this["_" + key] = newValue;
                                return this;
                            },
                            enumerable: true,
                        }
                    });
                }
            }

            build() {
                const filteredKeys = Object.keys(this).filter(e => e.startsWith("_"));
                const args = filteredKeys.map(e => this[e]);
                return new Constructor(...args);
            }
        };
    };
}