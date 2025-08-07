import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: "ik.imagekit.io",
				// hostname: "i.imgur.com",
				protocol: "https",
			},
			{
				// hostname: "ik.imagekit.io",
				hostname: "i.imgur.com",
				protocol: "https",
			},
			{
				// hostname: "ik.imagekit.io",
				hostname: "source.boomplaymusic.com",
				protocol: "https",
			},
			{
				// hostname: "ik.imagekit.io",
				hostname: "deadline.com",
				protocol: "https",
			},
			{
				// hostname: "ik.imagekit.io",
				hostname: "placehold.co",
				protocol: "https",
			},
			{
				// hostname: "ik.imagekit.io",
				hostname: "cdn.shopify.com",
				protocol: "https",
			},
		],
	},
}

export default nextConfig
