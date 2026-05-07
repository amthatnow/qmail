// Qmail - phishing awareness spil
// alt JS samlet i én fil ligesom på de andre projekter jeg har lavet

// ===== mail-data =====
// 20 mails i alt - 5 er phishing, 15 er sikre
window.EMAILS = [
  {
    id: "1",
    senderName: "Google Security",
    senderEmail: "no-reply@accounts-google.secure-verify.com",
    subject: "Critical security alert: unusual sign-in attempt",
    preview: "We detected a sign-in from an unrecognized device. Verify within 24 hours or your account will be locked.",
    body: [
      "Hi,",
      "We detected a sign-in to your Google Account from a new device in Lagos, Nigeria. If this wasn't you, your account may be compromised.",
      "You must verify your identity within the next 24 hours to avoid permanent suspension.",
      { text: "Verify your account now", realUrl: "http://accounts-google.secure-verify.com/login?id=8821" },
      "Thanks,\nThe Google Accounts Team",
    ],
    date: "10:24 AM",
    isPhishing: true,
    redFlags: [
      "Sender domain is 'accounts-google.secure-verify.com' - Google never sends from third-party domains",
      "Urgency pressure: '24 hours or your account will be locked'",
      "Link points to a non-Google URL (hover to reveal)",
      "Generic greeting 'Hi,' instead of your name",
    ],
    category: "primary",
  },
  {
    id: "2",
    senderName: "GitHub",
    senderEmail: "noreply@github.com",
    subject: "[qmail-app] PR #42 was merged",
    preview: "alex-dev merged pull request #42 into main: 'Add inbox filtering'",
    body: [
      "Hi there,",
      "alex-dev merged pull request #42 'Add inbox filtering' into main.",
      { text: "View pull request", realUrl: "https://github.com/yourorg/qmail-app/pull/42" },
      "- The GitHub Team",
    ],
    date: "9:15 AM",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "3",
    senderName: "Sarah Chen (CEO)",
    senderEmail: "sarah.chen.ceo@gmail.com",
    subject: "Quick favor - are you at your desk?",
    preview: "I need you to handle something urgent for me. Reply ASAP.",
    body: [
      "Hi,",
      "Are you available right now? I'm in a meeting and can't talk, but I need you to pick up some Apple gift cards for a client. I'll reimburse you later today.",
      "Please buy 5x $200 cards and send me the codes by photo. Don't mention this to anyone - it's a surprise.",
      "Sent from my iPhone",
    ],
    date: "Yesterday",
    isPhishing: true,
    redFlags: [
      "CEO's personal Gmail address - not the company domain",
      "Classic gift-card scam pattern",
      "Urgency + secrecy ('don't mention this to anyone')",
      "Unusual request the CEO would never make over email",
    ],
    category: "primary",
  },
  {
    id: "4",
    senderName: "University Registrar",
    senderEmail: "registrar@university.edu",
    subject: "Spring semester registration opens Monday",
    preview: "Registration for spring courses begins Monday at 8 AM. Check your enrollment date in the portal.",
    body: [
      "Dear student,",
      "Registration for the Spring 2026 semester opens on Monday, May 11. Please log in to the student portal at your scheduled enrollment time to register.",
      { text: "Visit student portal", realUrl: "https://portal.university.edu" },
      "Best regards,\nOffice of the Registrar",
    ],
    date: "Apr 30",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "5",
    senderName: "LinkedIn",
    senderEmail: "invitations@linkedin.com",
    subject: "Maria Rossi wants to connect",
    preview: "Maria Rossi, Product Manager at Acme, would like to add you to her professional network.",
    body: [
      "Hi,",
      "Maria Rossi (Product Manager at Acme Corp) sent you an invitation to connect on LinkedIn.",
      { text: "View invitation", realUrl: "https://www.linkedin.com/invitations" },
      "- The LinkedIn Team",
    ],
    date: "Apr 28",
    isPhishing: false,
    redFlags: [],
    category: "social",
  },
  {
    id: "6",
    senderName: "IT Helpdesk",
    senderEmail: "it-support@helpdesk-portaI.com",
    subject: "Mailbox full - verify to keep receiving emails",
    preview: "Your mailbox has reached its quota. Click below to expand storage.",
    body: [
      "User,",
      "Your mailbox quota (2.0 GB / 2.0 GB) has been reached. Outgoing and incoming emails will be blocked unless you verify your account to expand storage.",
      { text: "Verify and expand mailbox", realUrl: "http://helpdesk-portal.com/verify?u=user" },
      "IT Helpdesk Team",
    ],
    date: "Apr 27",
    isPhishing: true,
    redFlags: [
      "Domain uses a capital 'I' instead of lowercase 'l' (helpdesk-portaI.com) - homograph trick",
      "Vague 'User,' greeting",
      "Threat to block email is a classic pressure tactic",
      "Link goes to a non-corporate domain",
    ],
    category: "primary",
  },
  {
    id: "7",
    senderName: "Mom",
    senderEmail: "linda.parker72@gmail.com",
    subject: "Sunday dinner?",
    preview: "Are you coming over Sunday? Dad is making his lasagna :)",
    body: [
      "Hey sweetie,",
      "Just checking in - are you free for dinner Sunday? Dad is making lasagna and your sister will be in town.",
      "Let me know! Love you.",
      "- Mom",
    ],
    date: "Apr 27",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "8",
    senderName: "Amazon",
    senderEmail: "shipment-tracking@amazon.com",
    subject: "Your order has shipped",
    preview: "Your order #112-7733829 has shipped and will arrive Wednesday.",
    body: [
      "Hello,",
      "Your order of 'USB-C Hub (4-port)' has shipped and is expected to arrive on Wednesday, May 7.",
      { text: "Track your package", realUrl: "https://www.amazon.com/gp/your-account/order-details" },
      "Thanks for shopping with us.",
    ],
    date: "Apr 26",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "9",
    senderName: "Spotify",
    senderEmail: "no-reply@spotify.com",
    subject: "Your May playlist is ready",
    preview: "Discover Weekly: 30 fresh tracks picked just for you.",
    body: [
      "Hi,",
      "Your Discover Weekly playlist for this week is ready. We've handpicked 30 new tracks based on what you've been listening to.",
      { text: "Open in Spotify", realUrl: "https://open.spotify.com/playlist/discover-weekly" },
      "Happy listening,\nSpotify",
    ],
    date: "Apr 25",
    isPhishing: false,
    redFlags: [],
    category: "promotions",
  },
  {
    id: "10",
    senderName: "Tax Refund Office",
    senderEmail: "refund@irs-tax-portal.org",
    subject: "You are eligible for a $948.20 tax refund",
    preview: "Submit your bank details to receive your refund within 3 business days.",
    body: [
      "Dear taxpayer,",
      "Following our recalculation, you are eligible for a refund of $948.20. To process the refund, please submit your bank account details using the secure form below.",
      { text: "Claim your refund", realUrl: "http://irs-tax-portal.org/claim?ref=T2025" },
      "Internal Revenue Service",
    ],
    date: "Apr 24",
    isPhishing: true,
    redFlags: [
      "The IRS never initiates contact about refunds via email",
      "Asks for bank details via an external link",
      "Sender domain '.org' is not a real government domain (.gov)",
      "Suspiciously specific amount to entice you to click",
    ],
    category: "primary",
  },
  {
    id: "11",
    senderName: "Calendar",
    senderEmail: "calendar-notification@google.com",
    subject: "Reminder: Team standup at 10:00 AM",
    preview: "Daily standup with the engineering team. Meeting room: Aurora.",
    body: [
      "This is a reminder for your event:",
      "Daily standup - 10:00 AM today",
      "Meeting room: Aurora (3rd floor)",
      { text: "View on Google Calendar", realUrl: "https://calendar.google.com/calendar/event?eid=abc" },
    ],
    date: "Apr 24",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "12",
    senderName: "Notion",
    senderEmail: "team@mail.notion.so",
    subject: "Weekly digest: 3 pages updated",
    preview: "Here's what changed in your workspace this week.",
    body: [
      "Hi,",
      "Here's a quick summary of activity in your workspace this week: 3 pages updated, 1 new comment.",
      { text: "Open Notion", realUrl: "https://www.notion.so" },
      "- The Notion team",
    ],
    date: "Apr 22",
    isPhishing: false,
    redFlags: [],
    category: "promotions",
  },
  {
    id: "13",
    senderName: "Jordan Park",
    senderEmail: "jordan.park@university.edu",
    subject: "Lecture notes from today",
    preview: "Hey, here are the notes you missed from Wednesday's class. See you Friday!",
    body: [
      "Hey,",
      "Attached are the notes from today's lecture - let me know if anything doesn't make sense. Also, are we still meeting at the library Friday?",
      "Cheers,\nJordan",
    ],
    date: "Apr 21",
    attachment: { name: "lecture_notes_w8.pdf", size: "412 KB", type: "pdf" },
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "14",
    senderName: "International Lottery",
    senderEmail: "claims@euromillions-winners-2025.com",
    subject: "CONGRATULATIONS!!! You have won €2,500,000",
    preview: "Your email was selected in our annual draw. Contact our agent to claim.",
    body: [
      "DEAR LUCKY WINNER,",
      "Your email address was randomly selected in our 2025 EuroMillions International Lottery draw. You have won the sum of €2,500,000.",
      "To claim your prize, please reply with your full name, address, phone number, and a copy of your ID.",
      { text: "Contact our claims agent", realUrl: "http://euromillions-winners-2025.com/claim" },
      "Congratulations once again!",
    ],
    date: "Apr 20",
    isPhishing: true,
    redFlags: [
      "You can't win a lottery you didn't enter",
      "ALL CAPS and excessive exclamation points",
      "Asks for personal identification documents",
      "Classic advance-fee fraud pattern",
    ],
    category: "promotions",
  },
  {
    id: "15",
    senderName: "Slack",
    senderEmail: "feedback@slack.com",
    subject: "You have 4 unread messages in #general",
    preview: "Catch up on what you missed in your workspace.",
    body: [
      "Hi,",
      "You have 4 unread messages in your workspace this morning.",
      { text: "Open Slack", realUrl: "https://app.slack.com/client" },
      "- The Slack Team",
    ],
    date: "Apr 19",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "16",
    senderName: "Medium Daily Digest",
    senderEmail: "noreply@medium.com",
    subject: "5 stories for you today",
    preview: "Today's picks based on what you've been reading.",
    body: [
      "Good morning,",
      "Here are 5 stories we think you'll enjoy today, based on the topics you follow.",
      { text: "Read on Medium", realUrl: "https://medium.com" },
      "- The Medium Team",
    ],
    date: "Apr 19",
    isPhishing: false,
    redFlags: [],
    category: "promotions",
  },
  {
    id: "17",
    senderName: "Steam",
    senderEmail: "noreply@steampowered.com",
    subject: "Your wishlist item is on sale",
    preview: "'Hollow Knight' is 50% off this week only.",
    body: [
      "Hi,",
      "An item from your wishlist is now on sale: Hollow Knight - 50% off until May 12.",
      { text: "View on Steam", realUrl: "https://store.steampowered.com" },
      "Happy gaming!",
    ],
    date: "Apr 18",
    isPhishing: false,
    redFlags: [],
    category: "promotions",
  },
  {
    id: "18",
    senderName: "Morten (IBA)",
    senderEmail: "morten.h@student.iba.dk",
    subject: "Øl i weekenden - MobilePay?",
    preview: "Hej! Husk lige at sende mig de penge for øl i lørdags 🍻",
    body: [
      "Hej,",
      "Tænkte lige jeg skulle minde dig om de øl jeg lagde ud for i lørdags på baren. Det blev 175 kr i alt.",
      "Du kan bare smide dem på MobilePay til mit nummer (samme som altid - 26 71 84 03). Ingen stress, bare når du har tid i løbet af ugen.",
      "Vi ses til forelæsning på torsdag!",
      "- Morten",
    ],
    date: "Apr 18",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "19",
    senderName: "Trello",
    senderEmail: "do-not-reply@trello.com",
    subject: "Alex added you to the board 'Q3 Planning'",
    preview: "You now have access to the Q3 Planning board.",
    body: [
      "Hi,",
      "Alex added you as a member of the board 'Q3 Planning'.",
      { text: "Open the board", realUrl: "https://trello.com/b/q3planning" },
      "- Trello",
    ],
    date: "Apr 17",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
  {
    id: "20",
    senderName: "Stripe",
    senderEmail: "receipts@stripe.com",
    subject: "Your receipt from Acme Coffee",
    preview: "Receipt #2451 - $4.75",
    body: [
      "Hi,",
      "Thanks for your purchase. Here is your receipt for $4.75 at Acme Coffee on April 17.",
      { text: "View receipt", realUrl: "https://stripe.com/receipts/2451" },
      "- Stripe",
    ],
    date: "Apr 17",
    isPhishing: false,
    redFlags: [],
    category: "primary",
  },
];

// ===== state - holder styr på spillets tilstand =====
// bruger sessionStorage så det overlever sidewechsel men nulstilles når fanen lukkes
var STATE_KEY = "qmail.state.v1";

function defaultState() {
  return {
    started: false,
    finished: false,
    emails: {}, // { id: { read: bool, judgment: "phishing"|"safe"|null } }
  };
}

function loadState() {
  var raw = sessionStorage.getItem(STATE_KEY);
  if (!raw) return defaultState();
  try {
    var s = JSON.parse(raw);
    var d = defaultState();
    if (s.started === undefined) s.started = d.started;
    if (s.finished === undefined) s.finished = d.finished;
    if (s.emails === undefined) s.emails = d.emails;
    return s;
  } catch (e) {
    // hvis JSON er gået i stykker så starter vi bare forfra
    return defaultState();
  }
}

function saveState(s) {
  sessionStorage.setItem(STATE_KEY, JSON.stringify(s));
}

// hjælper så jeg ikke skal tjekke om mailen findes hver gang
function ensureEmail(state, id) {
  if (!state.emails[id]) state.emails[id] = { read: false, judgment: null };
  return state.emails[id];
}

var Store = {
  get: function () { return loadState(); },
  reset: function () { sessionStorage.removeItem(STATE_KEY); },
  start: function () { var s = defaultState(); s.started = true; saveState(s); },
  markRead: function (id) { var s = loadState(); ensureEmail(s, id).read = true; saveState(s); },
  judge: function (id, j) {
    var s = loadState();
    var e = ensureEmail(s, id);
    e.judgment = j;
    e.read = true;
    saveState(s);
  },
  finish: function () { var s = loadState(); s.finished = true; saveState(s); },
  // hvis brugeren prøver at hoppe direkte ind uden at have startet - send til start
  requireStarted: function () {
    if (!loadState().started) {
      window.location.hash = "#/";
      return false;
    }
    return true;
  },
};

// ===== inbox UI tilstand - holder fane/søgning på tværs af renders =====
var inboxUI = { tab: "primary", query: "", unreadOnly: false };

// ===== render: start =====
function renderStart() {
  var btn = document.getElementById("startBtn");
  if (!btn || btn.dataset.bound) return;
  btn.dataset.bound = "1";
  btn.addEventListener("click", function () {
    Store.start();
    window.location.hash = "#/inbox";
  });
}

// ===== render: indbakke =====
function renderInbox() {
  if (!Store.requireStarted()) return;

  var rowsEl = document.getElementById("rows");
  var emptyEl = document.getElementById("empty");
  var searchInput = document.getElementById("searchInput");
  var unreadToggle = document.getElementById("unreadToggle");
  var unreadCountEl = document.getElementById("unreadCount");
  var tabBtns = document.getElementsByClassName("tab");

  function draw() {
    var state = Store.get();
    var query = inboxUI.query.toLowerCase();

    // find ud af hvilke mails der skal vises
    var visible = [];
    for (var i = 0; i < EMAILS.length; i++) {
      var e = EMAILS[i];
      var category = e.category || "primary";
      if (category !== inboxUI.tab) continue;

      var es = state.emails[e.id];
      var isRead = es && es.read;
      if (inboxUI.unreadOnly && isRead) continue;

      if (query) {
        var hay = (e.senderName + " " + e.senderEmail + " " + e.subject + " " + e.preview).toLowerCase();
        if (hay.indexOf(query) === -1) continue;
      }

      visible.push(e);
    }

    rowsEl.innerHTML = "";
    if (visible.length === 0) {
      emptyEl.hidden = false;
      emptyEl.textContent = query
        ? 'No conversations matched "' + inboxUI.query + '".'
        : "No emails in this tab.";
    } else {
      emptyEl.hidden = true;
    }

    for (var j = 0; j < visible.length; j++) {
      var em = visible[j];
      var emState = state.emails[em.id];
      var read = emState && emState.read;
      var judgment = emState ? emState.judgment : null;

      var li = document.createElement("li");
      li.className = "row " + (read ? "is-read" : "is-unread");

      var link = document.createElement("a");
      link.className = "row__link";
      link.href = "#/email/" + encodeURIComponent(em.id);

      var star = document.createElement("span");
      star.className = "row__star";
      star.textContent = em.starred ? "★" : "☆";

      var sender = document.createElement("span");
      sender.className = "row__sender";
      sender.textContent = em.senderName;

      var main = document.createElement("span");
      main.className = "row__main";
      var subject = document.createElement("span");
      subject.className = "row__subject";
      subject.textContent = em.subject;
      var preview = document.createElement("span");
      preview.className = "row__preview";
      preview.textContent = " - " + em.preview;
      main.appendChild(subject);
      main.appendChild(preview);

      link.appendChild(star);
      link.appendChild(sender);
      link.appendChild(main);

      if (judgment) {
        var pill = document.createElement("span");
        pill.className = "pill " + (judgment === "phishing" ? "pill--red" : "pill--green");
        pill.textContent = judgment;
        link.appendChild(pill);
      }

      var date = document.createElement("span");
      date.className = "row__date";
      date.textContent = em.date;
      link.appendChild(date);

      li.appendChild(link);
      rowsEl.appendChild(li);
    }

    // tæl ulæste i Primary
    var unread = 0;
    for (var k = 0; k < EMAILS.length; k++) {
      var em2 = EMAILS[k];
      if ((em2.category || "primary") !== "primary") continue;
      var es2 = state.emails[em2.id];
      if (!(es2 && es2.read)) unread++;
    }
    unreadCountEl.textContent = unread > 0 ? unread : "";
  }

  // bind events kun første gang
  if (!rowsEl.dataset.bound) {
    rowsEl.dataset.bound = "1";

    for (var t = 0; t < tabBtns.length; t++) {
      tabBtns[t].addEventListener("click", function (event) {
        var all = document.getElementsByClassName("tab");
        for (var x = 0; x < all.length; x++) all[x].classList.remove("is-active");
        event.currentTarget.classList.add("is-active");
        inboxUI.tab = event.currentTarget.dataset.tab;
        draw();
      });
    }

    searchInput.addEventListener("input", function () {
      inboxUI.query = searchInput.value;
      draw();
    });
    document.getElementById("searchForm").addEventListener("submit", function (e) {
      e.preventDefault();
    });

    unreadToggle.addEventListener("click", function () {
      inboxUI.unreadOnly = !inboxUI.unreadOnly;
      unreadToggle.classList.toggle("is-on", inboxUI.unreadOnly);
      draw();
    });
  }

  draw();
}

// ===== render: email-detalje =====
function renderEmail(emailId) {
  if (!Store.requireStarted()) return;

  var email = null;
  for (var j = 0; j < EMAILS.length; j++) {
    if (EMAILS[j].id === emailId) email = EMAILS[j];
  }
  if (!email) {
    window.location.hash = "#/inbox";
    return;
  }

  Store.markRead(email.id);

  var bodyEl = document.getElementById("emailBody");
  var actionbarEl = document.getElementById("actionbar");
  var feedbackEl = document.getElementById("feedback");

  function drawBody() {
    bodyEl.innerHTML = "";

    // emnelinje
    var head = document.createElement("div");
    head.className = "emailview__head";
    var h1 = document.createElement("h1");
    h1.className = "emailview__subject";
    h1.textContent = email.subject;
    head.appendChild(h1);
    bodyEl.appendChild(head);

    // afsender-blok
    var meta = document.createElement("div");
    meta.className = "emailview__meta";

    var avatar = document.createElement("div");
    avatar.className = "avatar avatar--md";
    avatar.textContent = email.senderName.charAt(0);

    var from = document.createElement("div");
    from.className = "emailview__from";
    var name = document.createElement("div");
    var strong = document.createElement("strong");
    strong.textContent = email.senderName;
    name.appendChild(strong);
    var addr = document.createElement("span");
    addr.className = "muted";
    addr.textContent = " <" + email.senderEmail + ">";
    name.appendChild(addr);
    from.appendChild(name);
    var to = document.createElement("div");
    to.className = "muted small";
    to.textContent = "to me";
    from.appendChild(to);

    var date = document.createElement("div");
    date.className = "muted small";
    date.textContent = email.date;

    meta.appendChild(avatar);
    meta.appendChild(from);
    meta.appendChild(date);
    bodyEl.appendChild(meta);

    // selve indholdet - body er et array af strings og link-objekter
    var content = document.createElement("div");
    content.className = "emailview__content";

    for (var k = 0; k < email.body.length; k++) {
      var part = email.body[k];
      if (typeof part === "string") {
        var lines = part.split("\n");
        for (var l = 0; l < lines.length; l++) {
          var p = document.createElement("p");
          p.textContent = lines[l];
          content.appendChild(p);
        }
      } else {
        var pLink = document.createElement("p");
        var a = document.createElement("a");
        a.className = "link";
        a.href = "#";
        a.textContent = part.text;
        a.title = part.realUrl; // viser den rigtige URL ved hover - som en rigtig mail-klient
        a.addEventListener("click", function (ev) { ev.preventDefault(); });
        pLink.appendChild(a);
        content.appendChild(pLink);
      }
    }

    if (email.attachment) {
      var att = document.createElement("div");
      att.className = "attachment";
      var icon = document.createElement("span");
      icon.className = "attachment__icon";
      icon.textContent = "📎";
      var info = document.createElement("div");
      var fname = document.createElement("div");
      fname.className = "attachment__name";
      fname.textContent = email.attachment.name;
      var ftype = document.createElement("div");
      ftype.className = "muted small";
      ftype.textContent = email.attachment.type.toUpperCase() + " • " + email.attachment.size;
      info.appendChild(fname);
      info.appendChild(ftype);
      att.appendChild(icon);
      att.appendChild(info);
      content.appendChild(att);
    }

    bodyEl.appendChild(content);
  }

  function drawActionbar() {
    var state = Store.get();
    var es = state.emails[email.id] || {};
    actionbarEl.innerHTML = "";
    if (es.judgment) return; // skjul hvis allerede besvaret

    var phishingBtn = document.createElement("button");
    phishingBtn.className = "btn btn--danger";
    phishingBtn.textContent = "⚠ Mark as phishing";
    phishingBtn.addEventListener("click", function () { judge("phishing"); });

    var safeBtn = document.createElement("button");
    safeBtn.className = "btn btn--success";
    safeBtn.textContent = "✓ Mark as safe";
    safeBtn.addEventListener("click", function () { judge("safe"); });

    actionbarEl.appendChild(phishingBtn);
    actionbarEl.appendChild(safeBtn);
  }

  function judge(j) {
    Store.judge(email.id, j);
    var correct = (j === "phishing" && email.isPhishing) || (j === "safe" && !email.isPhishing);
    showFeedback(correct ? "correct" : "wrong");
    drawActionbar();
  }

  function nextEmail() {
    var state = Store.get();
    var idx = -1;
    for (var i = 0; i < EMAILS.length; i++) if (EMAILS[i].id === email.id) idx = i;

    var next = null;
    for (var n = idx + 1; n < EMAILS.length; n++) {
      var s = state.emails[EMAILS[n].id] || {};
      if (!s.judgment) { next = EMAILS[n]; break; }
    }
    // loop tilbage hvis brugeren har sprunget nogle over
    if (!next) {
      for (var m = 0; m < idx; m++) {
        var s2 = state.emails[EMAILS[m].id] || {};
        if (!s2.judgment) { next = EMAILS[m]; break; }
      }
    }

    if (next) {
      window.location.hash = "#/email/" + encodeURIComponent(next.id);
    } else {
      Store.finish();
      window.location.hash = "#/results";
    }
  }

  function showFeedback(kind) {
    var title, sub, cls;
    if (kind === "correct") { title = "Correct!"; sub = "Nice catch."; cls = "ok"; }
    else { title = "Not quite"; sub = "Here's what to look for next time."; cls = "bad"; }

    feedbackEl.hidden = false;
    feedbackEl.innerHTML = "";

    var backdrop = document.createElement("div");
    backdrop.className = "feedback__backdrop";
    backdrop.addEventListener("click", closeFeedback);

    var panel = document.createElement("aside");
    panel.className = "feedback__panel feedback__panel--" + cls;

    var headEl = document.createElement("header");
    headEl.className = "feedback__head";
    var headInner = document.createElement("div");
    var h2 = document.createElement("h2");
    h2.textContent = title;
    var subP = document.createElement("p");
    subP.className = "muted small";
    subP.textContent = sub;
    headInner.appendChild(h2);
    headInner.appendChild(subP);
    var closeBtn = document.createElement("button");
    closeBtn.className = "iconbtn";
    closeBtn.textContent = "✕";
    closeBtn.addEventListener("click", closeFeedback);
    headEl.appendChild(headInner);
    headEl.appendChild(closeBtn);

    var bodyDiv = document.createElement("div");
    bodyDiv.className = "feedback__body";

    var listTitle = document.createElement("div");
    listTitle.className = "feedback__h";
    var ul = document.createElement("ul");
    ul.className = "feedback__list";

    if (email.isPhishing) {
      listTitle.textContent = "Red flags in this email";
      for (var i = 0; i < email.redFlags.length; i++) {
        var li = document.createElement("li");
        li.textContent = email.redFlags[i];
        ul.appendChild(li);
      }
    } else {
      listTitle.textContent = "Why this email is legitimate";
      // generiske grunde - sikre mails har ikke specifikke advarselstegn
      var reasons = [
        "Sender domain matches the real organization",
        "No urgency, threats, or unusual requests",
        "Links point to the legitimate website",
        "Content matches what you'd expect from this sender",
      ];
      for (var r = 0; r < reasons.length; r++) {
        var li2 = document.createElement("li");
        li2.textContent = reasons[r];
        ul.appendChild(li2);
      }
    }

    bodyDiv.appendChild(listTitle);
    bodyDiv.appendChild(ul);

    var foot = document.createElement("footer");
    foot.className = "feedback__foot";
    var nextBtn = document.createElement("button");
    nextBtn.className = "btn btn--primary";
    nextBtn.textContent = "Next email →";
    nextBtn.addEventListener("click", nextEmail);
    foot.appendChild(nextBtn);

    panel.appendChild(headEl);
    panel.appendChild(bodyDiv);
    panel.appendChild(foot);

    feedbackEl.appendChild(backdrop);
    feedbackEl.appendChild(panel);
  }

  function closeFeedback() {
    feedbackEl.hidden = true;
    feedbackEl.innerHTML = "";
  }

  feedbackEl.hidden = true;
  feedbackEl.innerHTML = "";
  drawBody();
  drawActionbar();
}

// ===== render: resultat =====
function renderResults() {
  var state = Store.get();
  var subEl = document.getElementById("resultsSub");
  var statsEl = document.getElementById("stats");
  var breakdownEl = document.getElementById("breakdown");

  // ryd så vi ikke duplikerer ved gen-render
  statsEl.innerHTML = "";
  breakdownEl.innerHTML = "";

  // tællere
  var caught = 0, totalPhishing = 0, falseAlarms = 0, missed = 0, correctSafe = 0, skipped = 0;
  var items = [];

  for (var i = 0; i < EMAILS.length; i++) {
    var e = EMAILS[i];
    var es = state.emails[e.id] || {};
    var outcome = "skipped";

    if (e.isPhishing) totalPhishing++;

    if (!es.judgment) {
      skipped++;
      outcome = e.isPhishing ? "missed" : "skipped";
      if (e.isPhishing) missed++;
    } else if (es.judgment === "phishing") {
      if (e.isPhishing) { caught++; outcome = "correct"; }
      else { falseAlarms++; outcome = "wrong"; }
    } else {
      if (e.isPhishing) { missed++; outcome = "missed"; }
      else { correctSafe++; outcome = "correct"; }
    }

    items.push({ email: e, outcome: outcome });
  }

  subEl.textContent = "You caught " + caught + " out of " + totalPhishing + " phishing emails.";

  function addStat(label, value) {
    var div = document.createElement("div");
    var dt = document.createElement("dt");
    dt.textContent = label;
    var dd = document.createElement("dd");
    dd.textContent = value;
    div.appendChild(dt);
    div.appendChild(dd);
    statsEl.appendChild(div);
  }

  addStat("Phishing caught", caught + " / " + totalPhishing);
  addStat("Missed", missed);
  addStat("False alarms", falseAlarms);
  addStat("Skipped", skipped);

  for (var b = 0; b < items.length; b++) {
    var it = items[b];
    var li = document.createElement("li");
    li.className = "brk brk--" + it.outcome;

    var label = document.createElement("span");
    label.className = "brk__label";
    label.textContent = it.email.senderName + " - " + it.email.subject;

    var tag = document.createElement("span");
    tag.className = "brk__tag";
    tag.textContent = it.outcome;

    li.appendChild(label);
    li.appendChild(tag);
    breakdownEl.appendChild(li);
  }

  var playAgain = document.getElementById("playAgainBtn");
  if (playAgain && !playAgain.dataset.bound) {
    playAgain.dataset.bound = "1";
    playAgain.addEventListener("click", function () { Store.reset(); });
  }
}

// ===== hash-router =====
// hash-routing virker uden server-side rewrites så det er nemmere
var views = {};

function showView(name) {
  for (var k in views) {
    if (views[k]) views[k].classList.toggle("is-active", k === name);
  }
}

function route() {
  var h = window.location.hash || "#/";
  if (h === "#/" || h === "" || h === "#") {
    showView("start");
    renderStart();
  } else if (h === "#/inbox") {
    showView("inbox");
    renderInbox();
  } else if (h.indexOf("#/email/") === 0) {
    var id = decodeURIComponent(h.replace("#/email/", ""));
    showView("email");
    renderEmail(id);
  } else if (h === "#/results") {
    showView("results");
    renderResults();
  } else {
    window.location.hash = "#/";
  }
}

// kør det hele når siden er klar
document.addEventListener("DOMContentLoaded", function () {
  views.start   = document.getElementById("view-start");
  views.inbox   = document.getElementById("view-inbox");
  views.email   = document.getElementById("view-email");
  views.results = document.getElementById("view-results");

  window.addEventListener("hashchange", route);
  route();
});
