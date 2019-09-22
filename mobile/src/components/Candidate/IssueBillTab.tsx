import React from 'react';
import Bulletin from '../Bulletin';
import IssueBill, { IssueBillProps } from '../IssueBill';

interface IssueBillTab {
    issueBills: IssueBillProps[];
}

const IssueBillTab = ({ issueBills }: IssueBillTab) => {
    return (
        <>
            <Bulletin
                primary="對於民眾關注的熱門議題，候選人在立法院實際提案和連署的法案。"
                secondary="這些議題怎麽產生的？"
            />
            <div>
                {issueBills.map(issueBill => (
                    <IssueBill {...issueBill} key={issueBill.issue} />
                ))}
            </div>
        </>
    );
};

export default IssueBillTab;
