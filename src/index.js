// This should show an error from the LSP because it's part of `files` in the rule, but it doesn't
// the LSP only works if `files` is removed but then the other file will show an error too
import x from '@foo'
