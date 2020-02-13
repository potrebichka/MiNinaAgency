import React from "react"
import Content from './Content'
import food1 from "../assets/images/food1.jpeg"
import food2 from "../assets/images/food2.jpeg"
import food3 from "../assets/images/food3.jpeg"
import food4 from "../assets/images/food4.jpeg"
import food5 from "../assets/images/food5.jpeg"

const Portfolio = (props) => {
    const data = [
        [`${food1}`, "Lorem Ipsum1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit purus, tristique eu metus nec, suscipit tincidunt felis. Donec finibus nulla in convallis molestie. Cras tincidunt ex at nisi sagittis, eget sodales nulla cursus. Curabitur tempus eleifend dolor. Aenean ultricies aliquam diam, eget condimentum nunc posuere tincidunt. Mauris tempus neque ut massa aliquet interdum. Nam rhoncus, urna ut malesuada feugiat, ante quam ornare nisi, ultrices aliquam nisi felis eu ligula. Morbi vel gravida magna, ut mattis ante. In hac habitasse platea dictumst."], 
        [`${food2}`, "Lorem ipsum2", "Nunc et aliquam augue. Nam blandit aliquet diam non aliquet. Proin consequat leo dolor, id suscipit dolor dictum sed. Cras eget elementum libero. Nullam dignissim fringilla risus in malesuada. Mauris posuere justo libero, non feugiat mauris fringilla vitae. Aenean diam tellus, consequat et mattis a, pretium tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus accumsan tempor leo scelerisque blandit. Fusce ac enim consectetur, ultricies nibh in, varius lectus. Mauris viverra mi fringilla, viverra nulla eu, congue massa. Nulla in nunc non dui maximus placerat. Etiam volutpat id nisl non egestas. Aenean enim orci, cursus sed tincidunt nec, iaculis ac nunc. Vivamus sit amet molestie magna. Nunc id commodo nisi."],
        [`${food3}`, "Lorem ipsum3", "Integer ut faucibus lacus, eu egestas odio. Nunc suscipit molestie nisl nec euismod. In hac habitasse platea dictumst. Nullam nec bibendum mi, id sagittis odio. Sed id metus vitae ligula egestas posuere ut ut nibh. Nullam tincidunt scelerisque sapien ac rutrum. Sed tempor vitae quam vel feugiat. In laoreet gravida rutrum. Pellentesque arcu sapien, pretium vitae egestas sit amet, venenatis gravida purus. Fusce nibh dui, vulputate sit amet tristique non, suscipit nec tellus. Curabitur vitae neque eget felis congue finibus quis at ante. Donec eu tempor dolor. In hac habitasse platea dictumst."],
        [`${food4}`, "Lorem ipsum4", "Sed porta facilisis pretium. Pellentesque hendrerit metus mollis sapien scelerisque, in viverra nisi accumsan. Mauris luctus molestie tortor. Suspendisse eget tortor et nibh suscipit sollicitudin. Aliquam pellentesque non massa sit amet ullamcorper. Nullam cursus lacus velit, quis imperdiet quam placerat non. Nullam et tincidunt lorem. Fusce elementum, ligula sed scelerisque pretium, diam nulla egestas urna, non laoreet lorem nisl id ligula. Mauris condimentum nunc sit amet nunc consectetur, in finibus libero accumsan. Nulla tempus, sem eu consequat tempus, ligula nunc pulvinar est, in tincidunt justo mi ac ipsum. Sed eu pulvinar lacus, eget facilisis nibh. In hac habitasse platea dictumst. Donec eu consequat erat, ac finibus lorem. Aliquam eget libero et ligula venenatis egestas a ac mi. Proin mollis commodo felis, tempor maximus nisi condimentum vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"],
        [`${food5}`, "Lorem ipsum5", "Sed justo eros, ultricies at urna vel, semper finibus sapien. Sed sit amet ultrices eros, non bibendum ligula. Nunc id imperdiet arcu, id egestas lorem. Nam finibus a ligula nec finibus. Suspendisse potenti. Aenean convallis ex eu mi efficitur consequat. Donec gravida bibendum ultricies. Quisque ac finibus justo, quis convallis metus. Cras quis volutpat erat. Cras enim lacus, faucibus at mi a, euismod pretium dui. Sed viverra posuere justo blandit dictum. Cras ut enim mattis, suscipit felis ultricies, porta lacus."]
    ]
    return (
        <div>
            {data.map((item, index) => 
                <Content img={item[0]} title={item[1]} description={item[2]} key={index}/>
            )}
        </div>
    )
}


export default Portfolio;