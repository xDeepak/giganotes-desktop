#[macro_use]
extern crate neon;

use neon::prelude::*;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("threadcount"))
}

#[no_mangle]
pub extern fn __cxa_pure_virtual() {
    loop{};
}

register_module!(mut cx, {
    cx.export_function("hello", hello)
});
