import axios, {AxiosPromise, AxiosResponse} from "axios";

// props 는 객체안에 키값들이 들어온다
interface IEntry {
    [props: string] : string | boolean;
}

interface IResponse {
    count: number;
    entries: IEntry[];
}

(async () => {
    const data : AxiosPromise<IResponse> =
         axios.get('https://api.publicapis.org/entries')
            .then((res:AxiosResponse<IResponse>) => res.data)
            .catch((e) => console.log(e));
            console.log("axios", (await data).entries[0]);
})();

(async () => {
    const arrayData : Array<AxiosPromise<IResponse>> =
       await Promise.all([
           axios.get('https://api.publicapis.org/entries')
               .then((res:AxiosResponse<IEntry[]>) => res.data.entries)
               .catch((e) => console.log(e)),
           axios.get('https://api.publicapis.org/entries')
               .then((res:AxiosResponse<IEntry[]>) => res.data.entries)
               .catch((e) => console.log(e)),
           axios.get('https://api.publicapis.org/entries')
               .then((res:AxiosResponse<IEntry[]>) => res.data.entries)
               .catch((e) => console.log(e))
       ]);
    console.log("axios", arrayData[0]);
    console.log("axios", arrayData[1]);
    console.log("axios", arrayData[2]);
})();