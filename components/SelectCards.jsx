import Image from "next/image";

import VisitorTicket from "../public/images/visitor-tickets.png";
import VolunteerTicket from "../public/images/volunteer-tickets.png";
import StudentTicket from "../public/images/student-tickets.png";

export default function SelectCards() {
  return (
    <div className="track">
        <ul>
          <li id="one">
            <article>
                <a href="/visitor" className="flex flex-col gap-8 items-center justify-center p-8 group">
                    <p className="font-bold text-xl text-brand-green">Visitor</p>
                    <div className="relative flex w-full h-full items-center justify-center">
                        <Image src={VisitorTicket} width={100} height={100} className="w-fit h-full -rotate-6 translate-x-6 group-hover:translate-x-3 group-hover:-translate-y-3 duration-500" alt="Visitor ticket" />
                        <Image src={VisitorTicket} width={100} height={100} className="w-fit h-full rotate-[8deg] -translate-x-6 drop-shadow-xl group-hover:-translate-x-3 group-hover:-translate-y-3 duration-500" alt="Visitor ticket" />
                    </div>
                </a>
            </article>
          </li>
          <li id="two">
            <article>
                <a href="/volunteer-list" className="flex flex-col gap-8 items-center justify-center p-8 group">
                    <p className="font-bold text-xl text-brand-red">Volunteer</p>
                    <div className="relative flex w-full h-full items-center justify-center">
                        <Image src={VolunteerTicket} width={100} height={100} className="w-fit h-full -rotate-6 translate-x-6 group-hover:translate-x-3 group-hover:-translate-y-3 duration-500" alt="Visitor ticket" />
                        <Image src={VolunteerTicket} width={100} height={100} className="w-fit h-full rotate-[8deg] -translate-x-6 drop-shadow-xl group-hover:-translate-x-3 group-hover:-translate-y-3 duration-500" alt="Visitor ticket" />
                    </div>
                </a>
            </article>
          </li>
          <li id="three">
            <article>
                <div className="flex flex-col gap-8 items-center justify-center p-8 group">
                    <p className="font-bold text-xl text-brand-gold">Student</p>
                    <div className="relative flex w-full h-full items-center justify-center">
                        <Image src={StudentTicket} width={100} height={100} className="w-fit h-full -rotate-6 translate-x-6 group-hover:translate-x-3 group-hover:-translate-y-3 duration-500" alt="Visitor ticket" />
                        <Image src={StudentTicket} width={100} height={100} className="w-fit h-full rotate-[8deg] -translate-x-6 drop-shadow-xl group-hover:-translate-x-3 group-hover:-translate-y-3 duration-500" alt="Visitor ticket" />
                    </div>
                </div>
            </article>
          </li>
        </ul>
        <div className="track__indicators" aria-hidden="true">
          <a href="#one" className="indicator"></a>
          <a href="#two" className="indicator"></a>
          <a href="#three" className="indicator"></a>
        </div>
        <p className="flex items-center justify-center text-gray-500">Click to switch</p>
      </div>
  );
}