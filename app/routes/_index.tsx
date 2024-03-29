import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {title: "back4app-containers-remix"},
    {name: "description", content: "Learn how to deploy a Remix project to Back4app Containers."},
  ];
};

export default function Index() {
  return (
    <></>
  );
}
