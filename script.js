const quoteElement=document.getElementById('quote');
const authorElement=document.getElementById('author');
const newQuoteBtn=document.getElementById('newQuoteBtn');
const API_URL='https://api.api-ninjas.com/v2/randomquotes';
const API_KEY='c2D7ZuSEaNV/6SMFNlbpWA==sAJVuUACwLt8rLQn';

async function getRandomQuote(){
  try{
    newQuoteBtn.disabled=true;
    quoteElement.classList.add('loading');
    authorElement.classList.add('loading');
    const r=await fetch(API_URL,{headers:{'X-Api-Key':API_KEY}});
    const d=await r.json();
    const q=Array.isArray(d)?d[0]:d;
    quoteElement.textContent=q.quote;
    authorElement.textContent=q.author;
  }catch(err){
    quoteElement.textContent='Error loading quote';
    authorElement.textContent='';
  }
  quoteElement.classList.remove('loading');
  authorElement.classList.remove('loading');
  newQuoteBtn.disabled=false;
}

newQuoteBtn.addEventListener('click',getRandomQuote);
window.addEventListener('DOMContentLoaded',getRandomQuote);
