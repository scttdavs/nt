# Bazel workspace created by @bazel/create 5.2.0

# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/main/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "nt",
    managed_directories = {"@npm": ["client/node_modules"]},
)

load("//tools:bazel_deps.bzl", "fetch_dependencies")

fetch_dependencies()

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

# The npm_install rule runs yarn anytime the package.json or package-lock.json file changes.
# It also extracts any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "npm_install")

node_repositories(node_version = "14.18.3")

npm_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//client:package.json",
    package_lock_json = "//client:package-lock.json",
    npm_command = "install",
    strict_visibility = True,
    symlink_node_modules = True,
    links = {"a": "//client/packages/a", "b": "//client/packages/b"}
)
