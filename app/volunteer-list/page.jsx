import '@radix-ui/themes/styles.css';
import { Checkbox } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';

export default function VolunteerList() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <div className="prose">
                <p>
                    As a volunteer, there are a few key elements of good room guiding that we ask you to keep in mind that will help you be most effective in the role. 
                    The following points will help you to develop your room guiding skills and have a worthwhile and enjoyable experience as a volunteer room guide:  
                </p>
                <li>
                    <strong>Be approachable.</strong> There is a tendency for visitors to feel that staff and volunteers are there to ‘keep an eye’ on them, particularly in historic buildings. 
                    Greet visitors on entering the room, and make it clear that you are a volunteer and are there to answer their questions. Be mindful of body language; try and keep it relaxed and open.  
                </li>
                <li>
                    <strong>Tailor your guiding.</strong> Due to its to its location on the City Walls, Micklegate Bar attracts a diverse audience who did not necessarily come to the attraction as a destination. 
                    As a room guide you are in a position to be responsive and provide engaging, entertaining and interesting content to visitors with different interests and levels of knowledge. 
                    The content provided to you in this pack greatly enhance our visitors’ experience not just of Micklegate Bar but of the entire walls and their visit to the city.  
                </li>
                <li>
                    <strong>Be accurate and consistent.</strong> In your volunteer role you are a representative of the York Archaeological Trust. 
                    As we try and ensure all of the information presented in our attractions is of the highest possible level of accuracy and that visitor experience is consistent, 
                    we ask that you use the information in this pack to answer visitor questions.
                </li>
                <li>
                    <strong>Be honest if you are unsure.</strong> If a visitor asks a question that you do not know the answer to, be upfront and honest that you do not know. 
                    You can direct questions on to the member of staff on the desk who may know the answer. 
                </li>
                <p>
                    As with all our volunteer positions, you are an important part of the team and the most valuable thing you can bring to the role is your enthusiasm and passion. 
                    We appreciate the time you give up to room guide for us, and we hope you enjoy your time volunteering.
                </p>
                <div className='w-full not-prose mt-4'>
                    <Checkbox className='my-2' />
                    <p className="ml-2 mt-0.5 inline-flex">I have read and understood the above points.</p>
                </div>
                <div className='my-4'>
                    <a href='/volunteer'>
                        <Button size="2" variant="solid">Continue</Button>
                    </a>
                </div>
            </div>
        </main>
    )
} 