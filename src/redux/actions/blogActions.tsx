import { Dispatch } from "redux";
import { db } from "../../config/firebaseInit";

import {
    GET_BLOG,
    IGetBlogType,
    ICreateBlogType,
} from "../reducers/blogReducer";

import { GET_HOME_BLOGS, IGetHomeBlogsType } from "../reducers/blogsReducer";

export const getHomeBlogs =
    () => async (dispatch: Dispatch<IGetHomeBlogsType>) => {
        const blog = db.collection("posts");

        try {
            console.log("getHomeBlogs exec");
            let arr: any = [];
            await blog
                .orderBy("date", "desc")
                .get()
                .then((docs) => {
                    docs.forEach((doc) => {
                        let obj = { ...doc.data() };
                        arr.push(obj);
                    });
                });

            dispatch({
                type: GET_HOME_BLOGS,
                payload: arr,
            });
        } catch (err: any) {
            console.log(err);
        }
    };

export const getBlog =
    (id: string | undefined, blogs: []) =>
    async (dispatch: Dispatch<IGetBlogType>) => {
        try {
            const blog = blogs.filter((el: any) => el.id);
            dispatch({
                type: GET_BLOG,
                payload: blog[0],
            });
        } catch (err: any) {
            console.log(err);
        }
    };

export const createBlog =
    (data: {}) => async (dispatch: Dispatch<ICreateBlogType>) => {
        const blog = db.collection("posts");
        try {
            await blog.add(data);
        } catch (err: any) {
            console.log(err);
        }
    };
