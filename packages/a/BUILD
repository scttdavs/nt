load("@build_bazel_rules_nodejs//:index.bzl", "js_library", "nodejs_binary")

js_library(
    name = "a",
    package_name = "a",
    srcs = glob(["*.js"]),
    visibility = ["//visibility:public"],
    deps = ["//packages/b"],
)

nodejs_binary(
    name = "main",
    data = [
        ":a",
    ],
    entry_point = "index.js",
)
