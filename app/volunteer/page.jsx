import '@radix-ui/themes/styles.css';

import yorkMap from '@/public/images/york-map.png';

import Image from 'next/image';

export default function Volunteer() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className='text-5xl font-TrajanBold'>Volunteer</h1>
            <div className='mt-16 flex flex-col gap-y-28'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative gap-y-20 lg:max-w-none'>
                    <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit rounded-xl pt-20">
                        <div className='bg-white'>
                            <Image src={yorkMap} width={1200} height={1200} className='w-full h-auto' alt="York map" />
                        </div>
                    </aside>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full h-fit bg-white rounded-xl mt-20 p-8'>
                            <div className='prose'>
                                <h2>Background of the English Civil War</h2>
                                <li><strong>Foundational Causes:</strong> The English Civil War, a series of armed conflicts and political machinations between Parliamentarians ("Roundheads") and Royalists ("Cavaliers"), primarily stemmed from issues of royal authority, governance, and religious freedoms. This period was marked by a power struggle between King Charles I and the Parliament of England.</li>
                                <li><strong>Key Players:</strong> Key figures included King Charles I, representing the absolute monarchy, and leaders like Oliver Cromwell, representing the parliamentary forces.</li>
                                <li><strong>Religious and Political Divisions:</strong> The war was also significantly influenced by religious tensions, particularly between the Anglican Church, supported by the monarchy, and various Protestant factions aligning with Parliament.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>York&lsquo;s Role in the Civil War</h2>
                                <li><strong>Strategic Importance:</strong> York, with its historical significance and strategic position in Northern England, became a pivotal location during the Civil War. As a walled city, it offered substantial defensive advantages and was a symbol of Royalist strength in the North.</li>
                                <li><strong>Royalist Stronghold:</strong> Initially, York was a stronghold for the Royalists. Its control was crucial for maintaining influence and coordination across Northern England, making it a target for Parliamentary forces.</li>
                                <li><strong>Economic and Military Significance:</strong> Besides its symbolic value, York was important for practical reasons, including control over trade routes and the ability to muster significant military forces.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Prelude to the Siege</h2>
                                <li><strong>Tensions Escalate:</strong> Leading up to 1644, tensions and conflicts across England escalated, making it clear that control of key cities like York would be crucial in determining the outcome of the war.</li>
                                <li><strong>Political Maneuvering:</strong> Prior to the siege, there were significant political and military maneuvers on both sides, with both the Royalists and Parliamentarians seeking alliances, such as with Scottish forces, and bolstering their strategic positions.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>The Onset of the Siege</h2>
                                <li><strong>Parliamentary Forces Converge:</strong> In 1644, a critical moment arrived as Parliamentary forces, including Scottish armies and troops from the Eastern Association, converged on York. This marked the beginning of one of the most significant sieges of the Civil War.</li>
                                <li><strong>York&lsquo;s Defense Preparedness:</strong> The city, aware of its importance and vulnerability, had prepared for a potential siege, strengthening its defenses and rallying its inhabitants for what would be a pivotal moment in the war.</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative gap-y-20 lg:max-w-none'>
                    <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit rounded-xl pt-20">
                        <div className='bg-white'>
                            <Image src={yorkMap} width={1200} height={1200} className='w-full h-auto' alt="York map" />
                        </div>
                    </aside>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full h-fit bg-white rounded-xl mt-20 p-8'>
                            <div className='prose'>
                                <h2>Military Strategies and Siege Techniques</h2>
                                <li><strong>Encirclement:</strong> The Parliamentary forces, including Scottish armies and troops from the Eastern Association, strategically surrounded York on three sides. This tactic aimed to isolate the city and cut off supplies and reinforcements.</li>
                                <li><strong>Use of Fortifications:</strong> The Scots&lsquo; inability to capture a key fortification known as &lsquo;the Sconce&lsquo; on the Mount played a crucial role. This fort effectively blocked the main southern approach to Micklegate Bar, hindering the siege efforts.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Offensive and Defensive Tactics</h2>
                                <li><strong>Sapping and Bombardment:</strong> Parliamentary forces employed sapping (undermining the walls) and bombardment to breach the city&lsquo;s defenses. Despite these aggressive tactics, York&lsquo;s robust defenses held strong for an extended period.</li>
                                <li><strong>City&lsquo;s Resistance:</strong> York&lsquo;s defenders utilized the city&lsquo;s strong walls and strategic positioning to their advantage, repelling multiple attempts to breach the city.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Technological and Logistical Aspects</h2>
                                <li><strong>Artillery Use:</strong> The use of artillery for bombardment was a significant aspect of the siege, reflecting the military technology of the time.</li>
                                <li><strong>Supply Lines and Logistics:</strong> Maintaining supply lines and managing logistics were critical for both the besiegers and the besieged. The effective blockade of York was instrumental in eventually forcing the city to surrender.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Psychological Warfare</h2>
                                <li><strong>Morale and Resolve:</strong> The prolonged nature of the siege tested the morale and resolve of both attackers and defenders. The psychological impact of a protracted siege often played a crucial role in its outcome.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Impact of the Siege Tactics</h2>
                                <li><strong>Effectiveness and Limitations:</strong> While the siege tactics, including sapping and bombardment, were partially effective, York&lsquo;s strong defenses and strategic fortifications like &lsquo;the Sconce&lsquo; presented significant challenges to the besieging forces.</li>
                                <li><strong>Role of Fortifications in Defense:</strong> The effectiveness of York&lsquo;s fortifications, particularly in areas like Micklegate Bar, was a testament to the city&lsquo;s preparedness and strategic planning in the face of the siege.</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative gap-y-20 lg:max-w-none'>
                    <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit rounded-xl pt-20">
                        <div className='bg-white'>
                            <Image src={yorkMap} width={1200} height={1200} className='w-full h-auto' alt="York map" />
                        </div>
                    </aside>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full h-fit bg-white rounded-xl mt-20 p-8'>
                            <div className='prose'>
                                <h2>Role and Significance of Micklegate Bar</h2>
                                <li><strong>Strategic Importance:</strong> Micklegate Bar, a key gateway into York from the south, was crucial in the city&lsquo;s defenses during the siege. Its strategic position and fortifications were key in controlling access to York.</li>
                                <li><strong>Historical Role:</strong> Beyond its defensive function, Micklegate Bar served as the &lsquo;royal gateway&lsquo;, symbolizing York&lsquo;s importance and prestige throughout history.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Impact of the Siege on Micklegate Bar and the Walls</h2>
                                <li><strong>Damage Incurred:</strong> The siege resulted in significant damage to parts of York&lsquo;s walls, particularly near Walmgate Bar and St Mary&lsquo;s Abbey. However, Micklegate Bar was notably spared from direct attack due to the protection offered by the Royalist-held Sconce fort.</li>
                                <li><strong>Defensive Actions:</strong> The city&lsquo;s defenders effectively utilized Micklegate Bar and other fortifications, playing a significant role in resisting the Parliamentary forces.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>Restoration and Changes Post-Siege</h2>
                                <li><strong>17th and 18th Century Restorations:</strong> After the siege, Micklegate Bar underwent necessary restoration to preserve its structural integrity and continued role as a primary city gateway.</li>
                                <li><strong>Alterations for Modern Use:</strong> In the 18th century, with decreased defensive necessity, Micklegate Bar was modified, including the addition of two pedestrian archways, reflecting a change in its use and significance.</li>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white rounded-xl p-8'>
                            <div className='prose'>
                                <h2>The Walls&lsquo; Evolution and Significance</h2>
                                <li><strong>Pre-Siege Fortifications:</strong> Prior to the siege, York&lsquo;s walls were a composite of medieval and earlier structures, strengthened over time in response to various threats.</li>
                                <li><strong>Post-Siege Relevance:</strong> Following the siege, the walls, including Micklegate Bar, experienced periods of neglect and restoration, mirroring the evolving needs and perceptions of city defenses in times of peace and conflict.</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 