interface GeneralDoc {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface HomePageData extends GeneralDoc {
	greeting: string;
	name: string;
	specialty: string;
}
