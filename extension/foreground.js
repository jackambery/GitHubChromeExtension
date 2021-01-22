//document.querySelector("#hplogo").classList.add('spinspinspin')

const first = document.createElement('button');
first.innerText = "SET DATA";
first.id = "first";

const second = document.createElement('button');
second.innerText = "SET SHOUTOUT TO BACKEND";
second.id = "second";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', () => {
    chrome.storage.local.set({ "password": "123" });
    console.log("I SET DATA")
});
//left off at 20:17 https://www.youtube.com/watch?v=-dhMbVEreII