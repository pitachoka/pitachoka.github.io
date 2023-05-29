const englishBtn = document.getElementById("en-Btn");
const russianBtn = document.getElementById("ru-Btn");
const georgianBtn = document.getElementById("ge-Btn");

englishBtn.addEventListener("click", () => {
    aboutContent.style.fontWeight = 'normal';
  document.getElementById("aboutContent").innerHTML = `
  <h2>About</h2>
    <p>
      My name is Misha Mumladze, but you can call me Pitachok. I am currently based in Tbilisi, Georgia.
      I have a strong passion for web development and enjoy learning new technologies.
      I am skilled in HTML, CSS, SCSS and JS, and I have a good command of the English language.
      Additionally, I am fluent in English and Georgian and have a basic understanding of Russian.
    </p>
    <p>
      I am currently studying at the Business Technologies Academy (BTA) in the web-integrated program.
      This program has provided me with a solid foundation in web development and has expanded my knowledge and skills.
      I am dedicated to continuous learning and staying up-to-date with the latest trends in the industry.
    </p>
  `;
});
russianBtn.addEventListener("click", () => {
    aboutContent.style.fontWeight = 'normal';
  document.getElementById("aboutContent").innerHTML = `
  <h2>Обо мне</h2>
  <p>
    Меня зовут Миша Мумладзе, но вы можете называть меня Питачок. В настоящее время я нахожусь в Тбилиси, Грузия.
    У меня есть страстное увлечение веб-разработкой и люблю изучать новые технологии.
    Я владею HTML, CSS, SCSS и JS, а также хорошо владею английским языком.
    Кроме того, я свободно владею английским и грузинским языками и имею базовое понимание русского языка.
  </p>
  <p>
    В настоящее время я учусь в Бизнес-Технологической Академии (BTA) в программе веб-интеграции.
    Эта программа дала мне прочный фундамент в веб-разработке и расширила мои знания и навыки.
    Я предан непрерывному обучению и всегда следую последним трендам в индустрии.
  </p>
    `;
});
georgianBtn.addEventListener("click", () => {
    aboutContent.style.fontWeight = 'normal';
  document.getElementById("aboutContent").innerHTML = `
  <h2>ჩემს შესახებ</h2>
  <p>
  მიშა მუმლაძე მქვია. ამჟამად ვცხოვრობ თბილისში, საქართველოში.
  მე მაქვს ძლიერი ვნება ვებ განვითარების მიმართ და სიამოვნებით ვსწავლობ ახალ ტექნოლოგიებს.
  მე ვიცი HTML, CSS, SCSS და JS, და კარგად ვფლობ ინგლისურ ენას.
  გარდა ამისა, თავისუფლად ვფლობ ინგლისურ და ქართულ ენას და მაქვს რუსულის საბაზისო ცოდნა.
  </p>
  <p>
    ამჟამად ვსწავლობ ბიზნეს ტექნოლოგიების აკადემიაში (BTA) ვებ ინტეგრირებულ პროგრამაზე.
    ამ პროგრამამ დამამყარა მყარი საფუძველი ვებ დეველოპმენტში და გააფართოვა ჩემი ცოდნა და უნარები.
    მე მიძღვნილი ვარ უწყვეტი სწავლისა და ინდუსტრიის უახლესი ტენდენციების შესახებ.
  </p>
    `;
});
