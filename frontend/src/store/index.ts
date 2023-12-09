import { create } from "zustand";
import { GetPosts, login, register } from "../axios/api";
import { persist, createJSONStorage } from "zustand/middleware";

interface Post {
    title: string;
    tag: string;
    link: string;
    author: string;
    date: string;
    image: string;
}
interface PostState {
    posts: Post[];
}
interface User {}
interface AuthState {
    token: string | undefined;
    user: User;
    login: (username: string, password: string) => void;
    register: (
        username: string,
        email: string,
        password: string
    ) => Promise<number>;
}

export const usePostStore = create<PostState>(
    persist(
        (set) => ({
            posts: [],
            fetch() {
                GetPosts(1).then((res) => set({ posts: res.posts }));
            },
        }),
        {
            name: "postStorage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export const useAuthStore = create<AuthState>(
    persist(
        (set, get) => ({
            token: undefined,
            user: {},
            login(username: string, password: string) {
                login(username, password).then((res) =>
                    set({ token: res.token })
                );
            },
            async register(username, email, password) {
                const res = await register(username, email, password);
                // console.log(res)
                if (res[0] === 201) {
                    get().login(username, password);
                    return 201;
                }
                return 0;
            },
        }),
        {
            name: "authStorage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
