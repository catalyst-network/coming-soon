var template = {
    title: 'Your gateway to the decentralised internet starts with the Atlas Wallet',
    description: 'Atlas Wallet is a multi-currency wallet supporting Bitcoin, Litecoin, ERC-20 tokens and soon Catalyst Networks native token KAT.',
    socialCard: '',
    url: '',
    twitter: '@AtlasCity',
    metaTitle: 'Cryptowallet Beta Signup',
    metaDescription: '',
}


var countDownDate = new Date(template.date).getTime(), // The countdown is intentionally set 15 mins prior to the actual event
    countdown = document.getElementById('js-countdown');
    cta = document.getElementById('js-cta');
    title = document.getElementById('js-title');
    kicker = document.getElementById('js-kicker');
    deck = document.getElementById('js-deck');
    mockup = document.getElementById('js-mockup');
 
    title.innerHTML = template.title;

    // Set metadata
    // Twitter
    document.querySelector('meta[name="twitter:site"]').setAttribute("content", template.twitter);
    document.querySelector('meta[name="twitter:creator"]').setAttribute("content", template.twitter);
    document.querySelector('meta[name="twitter:title"]').setAttribute("content", template.metaTitle);
    document.querySelector('meta[name="twitter:description"]').setAttribute("content", template.metaDescription);
    document.querySelector('meta[name="twitter:image"]').setAttribute("content", template.socialCard);
    //Open Graph
    document.querySelector('meta[property="og:url"]').setAttribute("content", template.url);
    document.querySelector('meta[property="og:title"]').setAttribute("content", template.metaTitle);
    document.querySelector('meta[property="og:description"]').setAttribute("content", template.metaDescription);
    document.querySelector('meta[property="og:image"]').setAttribute("content", template.socialCard);

var x = setTimeout(function() {
    deck.innerHTML = template.description;
    title.classList.add('fade-in');
    deck.classList.add('fade-in');
    mockup.classList.add('fade-in');
    // countdown.classList.add('fade-in');
    cta.classList.add('fade-in');

},
1000);
