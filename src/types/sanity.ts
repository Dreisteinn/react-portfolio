export interface HomePageData {
	greeting: string;
	name: string;
	specialty: string;
}

export interface AboutPageData {
	bio: {
		markDefs: [];
		style: string;
		_key: string;
		_type: string;
		children: {
			_type: string;
			text: string;
			_key: string;
			marks: [];
		}[];
	}[];
	primaryCommand: string;
	secondaryCommand: string;
}
