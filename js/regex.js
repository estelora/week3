// And that's a bit clearer, maybe.
 // So, read up on Regex. It's handy. And crazy. But also crazy
 // handy.
+
+
+// So, putting it all together, let's look at our word count
+// exercise from a few days ago:
+
+
+// Take a string, count the number of times each
+// word occurs, and return an array of word
+// stats that look something like this:
+// { word: 'hi', count: 3 }
+function wordCount(str) {
+  // Extract all words from str into an array
+  // using regular expressions FTW!!!!
+  var words = str.toLowerCase().match(/\w+/g);
+
+  // This is our hash table to uniquely look
+  // up a word
+  var uniqueWords = {};
+
+  // Loop through the words and count how many
+  // repeat occurrences we find
+  words.forEach(function (word) {
+    var wordStat = uniqueWords[word];
+
+    // If we haven't seen this word before,
+    if (!wordStat) {
+      // Insert a new stat object
+      uniqueWords[word] = {
+        word: word,
+        count: 1
+      };
+    } else {
+      // We already have seen this word, so let's
+      // increment the word's count
+      ++wordStat.count;
+    }
+  });
+
+  // Now, let's return an array of the stats that
+  // we just stored in our hash table.
+  //
+  // This gets an array of keys from our hash table.
+  // Then maps each key to its value.
+  //
+  // So, 'hello' would become { word: 'hello', count: 3 }
+  // or something like that.
+  return Object.keys(uniqueWords).map(function (word) {
+    return uniqueWords[word];
+  });
+}
+
+// Example of how to call it:
+console.log(wordCount('Hi there hi a a bah hi bah bye'));
+
+// Logs something like this:
+// [{
+//   count: 3,
+//   word: "hi"
+// }, {
+//   count: 1,
+//   word: "there"
+// }, {
+//   count: 2,
+//   word: "a"
+// }, {
+//   count: 2,
+//   word: "bah"
+// }, {
+//   count: 1,
+//   word: "bye"
+// }]
