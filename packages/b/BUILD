load("@build_bazel_rules_nodejs//:index.bzl", "js_library", "nodejs_binary")

js_library(
    name = "b",
    package_name = "b",
    srcs = glob(["*.js"]),
    visibility = ["//visibility:public"],
)

nodejs_binary(
    name = "main",
    data = [
        ":b",
    ],
    entry_point = "index.js",
)
