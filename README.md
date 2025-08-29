→ Assignment 05 all question answer: 

★ question 1 →
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer :

* getElementById("id name ") : 
১. Html এর একটি নির্দিষ্ট element id দিয়ে খুজে বের করে। 
২. ১ টি মাএ element ফেরত দেয়।
৩. একাধিক element খুঁজে বের করার ক্ষেএে প্রযোজ্য নয়। 
৪.exg.নিদিষ্ট কোন বাটন খুঁজে বের করতে। 

* getElementById("class name ") : 
১. html এর একাধিক elements class দিয়ে খুঁজে বের করতে পারে। 
২.একাধিক elements ফেরত দেয় array মতো object ফেরত দেয় 
৩. একাধিক elements খুজে বের করার জন্য প্রযোজ্য। 
৪. exg. একাধিক বাটন খুঁজে বের করার জন্য! 

* querySelector ("css selactor came "):
1. Css selector element খুজে বের করে।
২. একাধিক css selector থাকলেও শুধুমাত্র প্রথম css selector element ফেরত দেয় 
৩. ব্যাবহার তেমন সুবিধা জনক না। 

* querySelectorAll ("css selactor came "):
1. Css selector element খুজে বের করে।
২. একাধিক css selector থাকলেও css selector মিললে সব গুলা ফেরত দেয় array মতো করে। 
৩. বড় পরিসরে ব্যাবহার তেমন সুবিধা জনক না।


★Question 02→How do you create and insert a new element into the DOM?

Answer:

step1: প্রথমে একটি বেরিয়েবল সেখানে আমি html এর যে যায়গায় বসাতে চাই তা খুজে বের করতে হবে 
step2: আরেকটি বেরিয়েবল নিয়ে সেখানে নতুন একটু element create( document.createElement(" element name"))করতে হবে। 
step3: তৈরি করা element এর সাথে কনটেস্ট(.inner html or any contest ) যোগ করা। 
step4: html এর যেখানে বসাবো তা খুজে বের করে append করে দেওয়া।

★Question 03 →What is Event Bubbling and how does it work?

Answer :

Event bubbling হলো এমন একটি ঘটনা যা কোন কিছু উপর ক্লিক করলে সে ওই সময় শুধু সে কাজ করে না বরং তার প্যারেন্ট → তার প্যারেন্ট এইভাবে করে উপরে দিকে ওঠতে থাকে। 
এটার মাধ্যমে কোন কিছু সহজে খুজে বের করা যায়। 

★Qushon04→What is Event Delegation in JavaScript? Why is it useful?

Answer :

*point1 :  Delegation হলো এমন একটি মেথড যার মাধ্যমে আমরা একটা একটা Event listener না এড করে শুধু একটি মাএ parent element এর মধ্যে event listener এড করি এবং এর পরে Event bubbling এর মাধ্যমে যে কোন element খুজে বের করে সেখানে event এড করতে পারি। 
*point02: এর ফলে আমাদের code এর গোছানো থাকে এবং ব্রাউজার এ তারাতাড়ি লোড হয়। 

★Qushon05→What is the difference between preventDefault() and stopPropagation() methods?

Answer : 

preventDefault() : এটি সাধারণত কোন ব্রাউজার এর default behaviour এটি বন্ধ করে দেয়,, যার মধ্যেমে কোন লিংক যদি ক্লিক করা হয় শুধু ওইটা কাজ করে অন্য কোন behaviour থাকে না। 

stopPropagation(): এটি সাধারণত Event bubbling বন্ধ করার জন্য ব্যাবহার করা হয়,, যাতে যে খানে বলা হয় Event bubbling করে আর উপরে ওঠতে না পারে। 









