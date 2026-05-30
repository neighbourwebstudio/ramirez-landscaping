# Ramirez Landscaping Website

One-page static website for Ramirez Landscaping, designed for free Netlify hosting at a Netlify subdomain such as `ramirezlandscaping.netlify.app`.

## Cost

- Netlify static hosting on a Netlify subdomain: `$0/month` for a small simple site.
- GitHub repository: `$0/month`.
- Custom domain such as `ramirezlandscaping.com`: optional, usually about `$10-$20/year`.
- This site avoids paid databases, paid form tools, paid build services, and monthly hosting.

Netlify plan limits can change, so check the Netlify pricing page before launch. For this static site, the intended setup is the free tier.

## What Is Included

- One-page business website.
- Services list for tree trimming, bush trimming, fence repairs, trash removal, general yard cleaning, gutter cleaning, and weed removal.
- Past work gallery.
- Editable content files in `content/site.json` and `content/gallery.json`.
- `/admin` Decap CMS setup for easier updates after the site is connected to GitHub and Netlify Git Gateway.

## Before Launch

Update these values in `content/site.json`:

- `hours`
- `heroImage` if you have a real work photo

Replace the sample gallery photos in `content/gallery.json` with real project photos.

## Free Netlify Deployment

1. Create a free GitHub repository for these files.
2. Push this folder to the repository.
3. In Netlify, create a new site from that GitHub repository.
4. Use the site name `ramirezlandscaping` if it is available.
5. Confirm the published URL is `https://ramirezlandscaping.netlify.app`.

If `ramirezlandscaping` is already taken, Netlify will ask for a different free subdomain, such as `ramirez-landscaping` or `ramirezlandscapingca`.

## Owner Photo Updates

The `/admin` folder is set up for Decap CMS, which can let him update text and gallery photos without editing code.

Typical setup:

1. In Netlify, enable Identity for the site.
2. Enable Git Gateway.
3. Invite him as a site user.
4. He logs in at `https://ramirezlandscaping.netlify.app/admin`.
5. He edits "Past Work Gallery" and uploads new photos.

Keep the CMS setup on free Netlify and GitHub features. Do not enable paid add-ons unless you choose to later.
