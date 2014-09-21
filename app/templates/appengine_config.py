"""`appengine_config` gets loaded when starting a new application instance."""

# Ensure 3rd-party packages are available.

import vendor

vendor.add_package_dir('lib')
