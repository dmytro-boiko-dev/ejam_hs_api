import React, {useState, useEffect} from 'react';

interface Hero {
    id: number;
    name: string;
    superpower: string;
    humilityScore: number;
}

const App: React.FC = () => {
    // store heroes
    const [heroes, setHeroes] = useState<Hero[]>([]);
    // Local state for form inputs
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humilityScore, setHumilityScore] = useState(1);

    // fetch heroes
    useEffect(() => {
        fetchHeroes();
    }, []);

    // GET /api/superheroes
    const fetchHeroes = async () => {
        try {
            const response = await fetch('/api/superheroes');
            if (!response.ok) {
                throw new Error(`GET /api/heroes failed: ${response.status}`);
            }
            const data: Hero[] = await response.json();
            setHeroes(data);
        } catch (error) {
            console.error('Error fetching heroes:', error);
        }
    };

    // POST /api/superheroes
    const createHero = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newHero = {name, superpower, humilityScore: Number(humilityScore)};
            const response = await fetch('/api/superheroes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newHero),
            });
            if (!response.ok) {
                throw new Error(`POST /api/superheroes failed: ${response.status}`);
            }
            const createdHero: Hero = await response.json();
            // add newly created hero to the UI
            setHeroes((prev) => [...prev, createdHero]);
            // clear form inputs
            setName('');
            setSuperpower('');
            setHumilityScore(1);
        } catch (error) {
            console.error('Error creating hero:', error);
        }
    };

    return (
        <div style={{margin: '1rem auto', maxWidth: '600px'}}>
            <h1>Humble superheroes</h1>

            {/* create hero form */}
            <form onSubmit={createHero} style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
                <div>
                    <label>
                        Name
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Superpower
                        <input
                            type='text'
                            value={superpower}
                            onChange={(e) => setSuperpower(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Humility Score
                        <input
                            type='number'
                            value={humilityScore}
                            min={1}
                            max={10}
                            onChange={(e) => setHumilityScore(Number(e.target.value))}
                            required
                        />
                    </label>
                </div>
                <button type='submit'>Create Hero</button>
            </form>

            {/* fetch and display heroes */}
            <button onClick={fetchHeroes} style={{marginBottom: '1rem'}}>
                Refresh heroes list
            </button>
            <ul style={{listStyle: 'none', paddingLeft: 0}}>
                {heroes.map((hero) => (
                    <li key={hero.id} style={{marginBottom: '0.5rem'}}>
                        <strong>{hero.name}</strong> – {hero.superpower}
                        <span style={{marginLeft: '0.5rem'}}>
              (Humility: {hero.humilityScore})
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
