var template = {
    kicker: 'Catalyst live stream',
    title: 'A spotlight on secure software development with Catalyst',
    description: 'We have exciting product announcements coming your way — be one of the first to hear them on September 18 at 10 am PT. Join the live stream for a spotlight on secure software development and see demos and deep dives from CEO Nat Friedman and&nbsp;the&nbsp;GitHub&nbsp;Product&nbsp;Team.',
    liveDescription:'We’re live in San Francisco! See demos and deep dives on our latest security ships and hear the big news from CEO Nat Friedman and the team who worked on them.',
    date: 'September 18, 2019 9:45:00',
    footer: 'Hear even more product and community announcements at Catalyst Universe, November 13-14 in San Francisco. <a href="https://catalystnet.org/" target="_blank" rel="noopener" class="universe-banner__link">Get&nbsp;tickets&nbsp;<span>→</span></a>',
    socialCard: '',
    url: '',
    twitter: '@CatalystNetOrg',
    metaTitle: 'Catalyst Live Stream',
    metaDescription: '',
    stream: 'https://www.youtube-nocookie.com/embed/H6Kaf6vhN2Y',
}


var countDownDate = new Date(template.date).getTime(), // The countdown is intentionally set 15 mins prior to the actual event
    countdown = document.getElementById('js-countdown');
    cta = document.getElementById('js-cta');
    title = document.getElementById('js-title');
    kicker = document.getElementById('js-kicker');
    deck = document.getElementById('js-deck');
    livestream = document.getElementById('js-livestream');
    countdown.classList.remove('d-none');

    kicker.innerHTML= template.kicker;
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

var x = setInterval(function() {
    d = new Date();
    localOffset = d.getTimezoneOffset() * 60000;
    utc = d.getTime() + localOffset;
    sf = utc - (3600000*7);
    now = new Date(sf).getTime();
    distance = countDownDate - now;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = '<div class="countdown__item"><span class="countdown__number">' + days + '</span><span class="countdown__label">days</span></div><div class="countdown__item"><span class="countdown__number">' + hours + '</span><span class="countdown__label">hours</span></div><div class="countdown__item"><span class="countdown__number">' + minutes + '</span><span class="countdown__label">minutes</span></div><div class="countdown__item"><span class="countdown__number">' + seconds + '</span><span class="countdown__label">seconds</span></div>';
    deck.innerHTML = template.description;

    title.classList.add('fade-in');
    deck.classList.add('fade-in');
    countdown.classList.add('fade-in');
    cta.classList.add('fade-in');
    livestream.classList.add('fade-in');

    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "";
        deck.innerHTML = template.liveDescription;
        countdown.classList.add('d-none');
        cta.classList.add('d-none');
    }
},
1000);
