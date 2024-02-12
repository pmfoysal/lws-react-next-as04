const icons = {};

export default function Icons({ name }) {
	return icons[name] || null;
}
