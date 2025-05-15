export class BookResponseDto {
	uuid: string;
	title: string;
	description: string;
	imageUrl?: string | null;

	constructor(params: {
		uuid: string;
		title: string;
		description: string;
		imageUrl?: string | null;
	}) {
		this.uuid = params.uuid;
		this.title = params.title;
		this.description = params.description;
		this.imageUrl = params.imageUrl ?? undefined;
	}
}
