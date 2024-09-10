import cn from "classnames";

import { iContainer } from "./iContainer";

function Container({ className, children }: iContainer) {
    return <div className={cn(className, "container m-auto")}>{children}</div>;
}

export default Container;
