// onMount(async () => {
// 	if (!project.githubLink) {
// 		markdown = "<p>No project found.</p>";
// 		return;
// 	}
// 	const rawUrlBase =
// 		project.githubLink.replace("github.com", "raw.githubusercontent.com") +
// 		"/main/";
// 	const response = await fetch(rawUrlBase + "JOURNAL.md");
// 	const text = await response.text();

// 	const content = fm < any > text;
// 	frontmatter = content.attributes;

// 	const fixedBody = content.body.replace(
// 		/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
// 		(_, alt, relPath) => {
// 			const absolute = rawUrlBase + relPath;
// 			return `![${alt}](${absolute})`;
// 		},
// 	);

// 	const html = DOMPurify.sanitize(await marked.parse(fixedBody));
// 	const { html: withIds, headings: hs } = extractHeadings(html);
// 	markdown = withIds;
// 	headings = hs.filter((h) => h.level <= 3);
// });

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
	console.log(params.slug);
	return {
		serverMessage: "hello from server load function",
	};
};
