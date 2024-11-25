import SearchCardSection from '@/app/components/Cards/SearchCardSection';
import React from 'react';

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      {/* Pass the parameter as a prop */}
      <SearchCardSection loc={`${params.slug}`} />
    </div>
  );
};

export default page;
