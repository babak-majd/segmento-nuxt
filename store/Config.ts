import Package from "../interfaces/Package";
import User from "../interfaces/User";
import { defineStore } from "pinia";

export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            _token: null as String | null,
            _user: null as User | null,
            _package: null as Package | null
        }
    },
    getters: {
        user: (state): User | null => state._user,
        token: (state): String | null => state._token,
        package: (state): Package | null => state._package
    },
    actions: {
        setUser(user) {
            this._user = user;
        },
        setToken(token) {
            this._token = token;
        },
        setPackage(pack) {
            this._package = pack;
        },
        setConfig(data) {
            this.setToken(data.token);
            this.setUser(data.user);
            this.setPackage(data.package ?? null);
        }
    }
})