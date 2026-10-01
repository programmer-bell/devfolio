---
title: 'Why I select Astro'
description: 'Why content-driven site-এ কেন কম JavaScript মানেই দ্রুত site।'
pubDate: 2026-09-01
tags: ['astro', 'performance']
---

বেশিরভাগ website আসলে content দেখায়। সেখানে পুরো page-কে JavaScript দিয়ে render করার দরকার পড়ে না।

## Zero JS by default

Astro by default browser-এ কোনো JavaScript পাঠায় না। শুধু যেখানে interactivity দরকার, সেখানেই পাঠায়।

## Server-first

Page-এর HTML আগেই তৈরি হয়ে থাকে। Browser-কে শুধু সেটা দেখাতে হয়, নিজে কিছু বানাতে হয় না। তাই page খুব দ্রুত দেখা যায়, বিশেষ করে ধীর internet বা কম দামি phone-এ।

## Islands

যেখানে interactivity লাগে, শুধু সেখানেই JavaScript যায়। বাকি পুরো page থাকে হালকা HTML। একটা page-এ একটা like button থাকলে, JavaScript যাবে শুধু ওই button-এর জন্য।

## যেকোনো framework

React, Vue, Svelte, যেটা পছন্দ সেটা দিয়েই island বানানো যায়। এমনকি একই page-এ আলাদা আলাদা framework-ও ব্যবহার করা যায়।

## Content-এর জন্য বানানো

Markdown, content collection, schema, এগুলো Astro-র ভিতরেই আছে। Blog, documentation বা portfolio-র মতো site-এর জন্য তাই Astro খুব মানানসই।