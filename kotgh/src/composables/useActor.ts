import { reactive, toRefs } from "vue";

const data = reactive({
  user: {
    id: "0",
    avatar: "",
    name: "Siri",
    color: "043656",
    points: "100",
  },
  loggedIn: true,
});
export function useActor() {
  const { user, loggedIn } = toRefs(data);
  return {
    user: user,
    loggedIn: loggedIn,
  };
}

/*
Set up a composable called useActor and have data and functions for the current user there
So you create a reactive object reactive() , define properties like user(the user data from your API), authenticated, etc, then have the composable function return reactive refs and functions to what you need inside of components

https://github.com/SevenTV/ExtensionV3/blob/master/src/composable/chat/useChatEmotes.ts
https://github.com/SevenTV/ExtensionV3/blob/master/src/composable/chat/useChatMessages.ts
https://github.com/SevenTV/ExtensionV3/blob/master/src/composable/chat/useChatModeration.ts

toRefs turns properties of an object into reactive refs
https://vuejs.org/api/reactivity-utilities.html#torefs
https://stackoverflow.com/questions/66585688/what-is-the-difference-between-ref-toref-and-torefs
*/
