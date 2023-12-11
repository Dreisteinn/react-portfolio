export interface HomePageData {
	greeting: string;
	name: string;
	specialty: string;
	socialLinks: string[];
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

export interface ProjectData {
	code: string;
	demo: string;
	name: string;
	slug: {
		current: string;
		_type: string;
	};
	image: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	techs: string[];
}
