import { Layout } from "./Layout";
import { SkipMountEffect } from "./SkipMountEffect";
import { RefExample } from "./RefExample";
import { HttpReqAbortOnEvent } from "./HttpReqAbortOnEvent";
import { HttpReqAbort } from "./HttpReqAbort";
import { UseMemoExample } from "./UseMemoExample";

export function App() {
  return (
    <Layout>
      {/* <SkipMountEffect /> */}
      {/* <RefExample /> */}
      {/* <HttpReqAbort /> */}
      {/* <HttpReqAbortOnEvent /> */}
      <UseMemoExample />
    </Layout>
  );
}
