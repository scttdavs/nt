load("@build_bazel_rules_nodejs//:index.bzl", "js_library", "nodejs_binary")

js_library(
    name = "a",
    package_name = "a",
    srcs = glob(["*.js"]),
    package_path = "/Users/hswolff/Downloads/nt/client",
    visibility = ["//visibility:public"],
    deps = [
        "//client/packages/b",
        "@npm//bson",
    ],
)

nodejs_binary(
    name = "main",
    data = [
        ":a",
    ],
    entry_point = "index.js",
)
