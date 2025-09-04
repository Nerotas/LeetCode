//medium: https://leetcode.com/problems/longest-common-prefix/
//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
//tags: TRIE

//trie method
// function longestCommonPrefix(strs: string[]): string {
//   //establish Overall Node
//   class TrieNode {
//     children: {};
//     isEndOfWord: boolean;
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }

//   //establish individual class

//   class Trie {
//     root: TrieNode;

//     constructor() {
//       this.root = new TrieNode();
//     }

//     insert(word: string) {
//       let node = this.root;
//       //turn word into an array of chars as a child
//       for (let i = 0; i < word.length; i++) {
//         let char = word[i];
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }

//     search(word: string) {
//       let node = this.root;
//       //take word and search for existing child using same method as insert
//       for (let i = 0; i < word.length; i++) {
//         let char = word[i];

//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return node.isEndOfWord;
//     }

//     startsWith(prefix: string) {
//       let node = this.root;
//       for (let i = 0; i < prefix.length; i++) {
//         let char = prefix[i];
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return true;
//     }
//   }

//   //establish tree
//   const trie = new Trie();

//   //add to tree
//   strs.forEach((word) => trie.insert(word.toLowerCase()));

//   return "";
// }

//unnoted condition: ALL strings must have share a common prefix
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  strs.sort();
  //if we sort first, we only need to first and last strings
  const first: string = strs[0];
  const last: string = strs[strs.length - 1];
  let result: string = "";
  for (let i = 0; i < first.length; i++) {
    //compare letter by letter and add until diffrerent
    if (first[i] === last[i]) {
      result += first[i];
    } else {
      break;
    }
  }
  return result;
}

//test cases
console.log(
  "expected output: 'fl'",
  longestCommonPrefix(["flower", "flow", "flight"])
); // Output: "fl"
console.log(
  "expected output: ''",
  longestCommonPrefix(["dog", "racecar", "car"])
); // Output: ""
console.log("expected output: 'a'", longestCommonPrefix(["a"])); // Output: "a"
console.log("expected output: ''", longestCommonPrefix(["", "b"])); // Output: ""
console.log("expected output: 'c'", longestCommonPrefix(["c", "c"])); // Output: "c"

console.log(
  "expected output: 'fl'",
  longestCommonPrefix(["car", "flower", "flow"])
);
