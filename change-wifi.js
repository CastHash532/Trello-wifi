const puppeteer = require('puppeteer');
const fetch = require('node-fetch');


(async () => {
  console.log('Changement code Wifi en cours...')
  
  const browser = await puppeteer.launch({headless: true , defaultViewport: null})
  
  let [default_page] = await browser.pages();
    page = default_page;
      
    await page.goto('http://192.168.1.1/', {waitUntil: 'networkidle0'})
  await page.type('#userName', "admin")
  await page.type('#pcPassword', "sahraoui")
  await Promise.all([
    page.click('body > div.loginBox > div.panelThre > div > button'),
    page.waitForNavigation()
])
await default_page.waitFor(1000)

for (let i = 0; i < 7; i++) {
  await page.keyboard.press("Tab");
  if (i==4 || i==6) await page.keyboard.press('Enter')
}
await default_page.waitFor(3000)

for (let i = 0; i < 19; i++) {
  await page.keyboard.press("Tab");
}

await page.keyboard.press(a = Math.random().toString(10).slice(-1))
await page.keyboard.press(b = Math.random().toString(10).slice(-1))
await page.keyboard.press(c = Math.random().toString(10).slice(-1))
await page.keyboard.press(d = Math.random().toString(10).slice(-1))
await page.keyboard.press('@')
await page.keyboard.press('s')
await page.keyboard.press('a')
await page.keyboard.press('h')
const password = a+b+c+d+'@sah'

for (let i = 0; i < 4; i++) {
  await page.keyboard.press("Tab");
}

await page.keyboard.press('Enter')

await default_page.waitFor(15000)

for (let i = 0; i < 11; i++) {
  await page.keyboard.press("Tab");
}
     await page.keyboard.press('Enter')

     //generate image
//fs.writeFileSync(`\\\\SERVEUR-G\\Users\\Public\\Wifi.png`, text2png(password, {color: 'red'}));

browser.close()

code= "Wifi:_" + password;

fetch(`https://api.trello.com/1/cards/2Ld1bwxT?cover=true&name=${code}&pos=top&key=9d948dd5260f697c0d6613f9d54baab3&token=8bd61e481d1114463a3782c1a9c6ed081268fdc40f459b19d31061471c16fbca`, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
  
})()
