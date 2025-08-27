# Emergency-Hotline

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Answer:
- getElementById → একটা নির্দিষ্ট id দিয়ে element আনে।
- getElementsByClassName → এক বা একাধিক class এর element আনে আনে। এটি HTMLCollection দেয়। 
- querySelector → প্রথম যে element টা মিলে সেটা আনে।
- querySelectorAll → সবগুলো মিলে যাওয়া element আনে আনে। এটি NodeList দেয়।

## 2. How do you create and insert a new element into the DOM?
### Answer:
const newDiv = document.createElement("div");  
newDiv.innerText = 'Programming Hero';  
document.body.appendChild(newDiv); 
এখানে নতুন একটি div বানিয়ে Programming Hero লিখাটি div এর কনটেন্ট হিসেবে add করা হলো। এরপর div টি html এর body এর মধ্যে insert করা হয়েছে।

## 3. What is Event Bubbling and how does it work?
### Answer:
Event Bubbling হলো DOM-এ ইভেন্টের এমন একটি প্রক্রিয়া যেখানে কোনো চাইল্ড এলিমেন্টে ইভেন্ট ঘটলে, সেই ইভেন্ট ধাপে ধাপে তার প্যারেন্ট, গ্র্যান্ডপ্যারেন্ট হয়ে একেবারে document পর্যন্ত উপরে উঠে যায়।

## 4. What is Event Delegation in JavaScript? Why is it useful?
### Answer:
Event Delegation হলো এমন একটি টেকনিক যেখানে আমরা অনেকগুলো চাইল্ড এলিমেন্টে আলাদা আলাদা ইভেন্ট লিসেনার না বসিয়ে, তাদের কমন প্যারেন্ট এলিমেন্টে একটাই ইভেন্ট লিসেনার বসাই। তারপর event.target ব্যবহার করে বোঝা হয় কোন চাইল্ড এলিমেন্টে ইভেন্ট ঘটেছে।

## 5. What is the difference between preventDefault() and stopPropagation() methods?
### Answer :
- preventDefault() → কোন element এর default কাজ বন্ধ করে (যেমন form submit, link এ যাওয়া)।
- stopPropagation() → event আর parent element এ যেতে দেয় না (bubbling থামায়)।


